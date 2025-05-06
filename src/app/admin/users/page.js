'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@/app/store/user-slice';
import LoadingSkeleton from '@/app/components/skeletonLoading';

function Users() {
    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (isLoading) return <LoadingSkeleton />;
    // if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Users That are Logged In</h2>

            {user?.length === 0 ? (
                <p className="text-gray-500 text-lg">No users found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {user.map((u) => (
                        <div
                            key={u._id}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                <span className="font-light text-gray-600">UserName:</span> {u.userName}
                            </h3>
                            <p className="text-gray-700"><span className="font-medium">Email:</span> {u.email}</p>
                            <p className="text-gray-700"><span className="font-medium">Role:</span> {u.role}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default Users;
