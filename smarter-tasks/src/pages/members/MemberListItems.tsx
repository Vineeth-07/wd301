import React from "react";
import { deleteMember } from "../../context/members/actions";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";

export default function ProjectListItems() {
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;

  const dispatchMembers = useMembersDispatch();

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const deleteMemberHandler = async (id: number) => {
    console.log(id);
    const response = await deleteMember(dispatchMembers, id);
    console.log(response);
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="suspense-loading block member p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              <span className="font-bold">Name : </span>
              {member.name}
            </h5>
            <button
              onClick={() => {
                deleteMemberHandler(member.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white">
            <span className="font-bold">Email : </span>
            {member.email}
          </p>
        </div>
      ))}
    </>
  );
}
