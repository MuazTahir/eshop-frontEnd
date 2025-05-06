// 'use client'
// import { fetchOrders } from '@/app/store/order-slice';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchOrders } from '@/features/order/orderSlice';

// const AdminOrders = () => {
//   const dispatch = useDispatch();
//   const { orders, status, error } = useSelector(state => state.order);
//   console.log(orders, 'order are:')

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   if (status === 'loading') return <p>Loading orders...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
//       <ul className="space-y-2">
//         {orders?.map(order => (
//           <li key={order._id} className="p-4 border rounded">
//             <p><strong>ID:</strong> {order._id}</p>
//             <p><strong>Status:</strong> {order.status}</p>
//             <p><strong>Total:</strong> ${order.totalAmount}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminOrders;


'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '@/app/store/order-slice';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import LoadingSkeleton from '@/app/components/skeletonLoading';

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (status === 'loading') return <LoadingSkeleton />;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6 text-[#0E4749]">Orders Overview</h1>
      <div className="rounded-md border border-[#0E4749] shadow-sm">
        <Table>
          <TableHeader className="bg-[#0E4749]">
            <TableRow>
              <TableHead className="text-white">Order ID</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Total</TableHead>
              <TableHead className="text-white">Order Replaced </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((order, index) => (
              <TableRow
                key={order._id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-[#e6f1f1] transition-colors`}
              >
                <TableCell className="font-medium text-sm">{order._id}</TableCell>
                <TableCell>
                  <span
                    className={`px-2  rounded-full text-xs font-medium ${order.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 border-yellow-800 border-2'
                      : 'bg-green-50 border-[#0E4749] border-2 text-[#0E4749]'
                      }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-sans font-semibold">{order.totalAmount ? `$${order.totalAmount}` : 'NOT PAID'} </TableCell>
                <TableCell className="text-sm">
                  {new Date(order.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminOrders;
