"use client";
import Error from "@/components/Error";
import Grid from "@/components/Grid";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import SkeletonCard from "@/components/Skeleton";
import SortDropdown from "@/components/SortDropdown";
import UserCard from "@/components/UserCard";
import { userData } from "@/data/staticData";
import { closeModal, openModal, setSearch, setSortBy } from "@/features/ui/uiSlice";
import { fetchUsers } from "@/features/users/usersSlice";
import useDeabounce from "@/hooks/useDebounce";
import { AppDispatch, RootState } from "@/store";
import { Contact, RotateCw } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: users,
    loading,
    error,
  } = useSelector((s: RootState) => s.users);
  const { search, sortBy, selectedUserId } = useSelector(
    (s: RootState) => s.ui
  );

  const selectedUser = users.find((u) => u.id === selectedUserId);

  const debouncedSearch = useDeabounce(search, 400);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const effectiveUsers = users.length > 0 ? users : userData;

  const filteredUsers = effectiveUsers
    .filter((u) => u.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
    .sort((a, b) => {
      const aVal = sortBy === "name" ? a.name : a.company.name;
      const bVal = sortBy === "name" ? b.name : b.company.name;
      return aVal.localeCompare(bVal);
    });

  return (
    <main className="p-6 bg-white min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <Contact size={28} className="text-black" />
          <h1 className="text-2xl font-semibold text-black">
            Users Directory
          </h1>
        </div>
        <div className="flex gap-3 sm:flex-row flex-col w-full sm:w-auto">
          <button
            onClick={() => dispatch(fetchUsers())}
            disabled={loading}
            className="inline-flex items-center gap-2 border border-gray-200 bg-white rounded-md p-2 cursor-pointer text-sm hover:border-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCw size={18} className="text-gray-500 font-semibold" />
          </button>
          <SearchBar value={search} onChange={(v) => dispatch(setSearch(v))} />
          <SortDropdown
            value={sortBy}
            onChange={(v) => dispatch(setSortBy(v))}
          />
        </div>
      </header>

      {loading && (
        <Grid>
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </Grid>
      )}

      {error && (
        <Error retry={() => dispatch(fetchUsers())} />
      )}

      {!loading && !error && (
        <Grid>
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onClick={() => dispatch(openModal(user.id))} />
          ))}
        </Grid>
      )}

      <Modal
        open={!!selectedUser}
        onClose={() => dispatch(closeModal())}
        user={selectedUser}
      />
    </main>
  );
}
