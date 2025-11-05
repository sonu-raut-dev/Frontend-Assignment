"use client";
import Error from "@/components/Error";
import Grid from "@/components/Grid";
import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import SkeletonCard from "@/components/Skeleton";
import SortDropdown from "@/components/SortDropdown";
import UserCard from "@/components/UserCard";
import { userData } from "@/data/staticData";
import {
  closeModal,
  openModal,
  setSearch,
  setSortBy,
} from "@/features/ui/uiSlice";
import { fetchUsers } from "@/features/users/usersSlice";
import useDeabounce from "@/hooks/useDebounce";
import { AppDispatch, RootState } from "@/store";
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
    <div className="py-6 px-5 bg-white min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold text-black">Users Directory</h1>
        </div>
      </header>
      <div className="flex gap-3 sm:flex-row flex-col w-full sm:w-auto mb-6">
        <SearchBar value={search} onChange={(v) => dispatch(setSearch(v))} />
        <div className="grid grid-cols-[1fr_35.6px] items-center gap-1 sm:gap-3">
          <SortDropdown
            value={sortBy}
            onChange={(v) => dispatch(setSortBy(v))}
          />
          <button
            onClick={() => dispatch(fetchUsers())}
            disabled={loading}
            aria-label="Refresh users"
            title="Refresh"
            className="inline-flex items-center w-fit gap-2 border border-gray-200 bg-white rounded-md p-2 cursor-pointer text-sm hover:border-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="ri-restart-line text-lg text-gray-500 leading-none" />
          </button>
        </div>
      </div>

      {!loading && !error && filteredUsers.length > 0 && (
        <p className="text-xs text-black font-medium mb-3">{`Users (${filteredUsers.length})`}</p>
      )}
      {loading && (
        <Grid>
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </Grid>
      )}

      {error && <Error retry={() => dispatch(fetchUsers())} />}

      {!loading &&
        !error &&
        (filteredUsers.length > 0 ? (
          <Grid>
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => dispatch(openModal(user.id))}
              />
            ))}
          </Grid>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F3F6FF] mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <span className="ri-search-eye-line text-[#3786FF] text-4xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              No Results Found
            </h2>
            <p className="text-sm text-gray-500 max-w-sm mb-4">
              We couldn’t find any users matching{" "}
              <span className="font-medium text-gray-700">“{search}”</span>. Try
              adjusting your search or reset filters.
            </p>
            <button
              onClick={() => dispatch(setSearch(""))}
              className="px-4 cursor-pointer py-2 text-sm font-medium bg-[#3786FF] text-white rounded-md hover:bg-[#2e73e6] transition"
            >
              Clear Search
            </button>
          </div>
        ))}

      <Modal
        open={!!selectedUser}
        onClose={() => dispatch(closeModal())}
        user={selectedUser}
      />
    </div>
  );
}
