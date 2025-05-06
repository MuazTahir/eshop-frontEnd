
// 'use client'
// import { dailyAnalyticalDataFetch } from '@/app/store/analyticla-slice';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
// import LoadingSkeleton from '../skeletonLoading';
// import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// const UserGraph = () => {
//     const dispatch = useDispatch();
//     // const { dailyStats, isLoading } = useSelector(state => state.analytical);
//     const { dailyState, isLoading } = useSelector((state) => state.analytical)
//     // if (!Array.isArray(dailyState)) {
//     //     console.warn('dailyStats is not an array:', dailyState);
//     // }


//     console.log(dailyState, 'daily state is :')

//     useEffect(() => {
//         dispatch(dailyAnalyticalDataFetch());
//     }, [dispatch]);

//     const formattedData = dailyState.map(item => ({
//         date: `${item._id.year}-${item._id.month}-${item._id.day}`,
//         count: item.count
//     }));

//     return (
//         <div className="w-full h-96 bg-white rounded-xl shadow p-4">
//             <h2 className="text-xl font-bold mb-4 text-gray-700">User Signups Per Day</h2>
//             {isLoading ? (
//                 <LoadingSkeleton />
//             ) : (
//                 <ResponsiveContainer width="100%" height="90%">
//                     <LineChart data={formattedData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="date" />
//                         <YAxis allowDecimals={false} />
//                         <Tooltip />
//                         <Line type="monotone" dataKey="count" stroke="#007bff" strokeWidth={2} />
//                     </LineChart>
//                 </ResponsiveContainer>
//             )}
//         </div>
//     );
// };

// export default UserGraph;


'use client';
import { dailyAnalyticalDataFetch } from '@/app/store/analyticla-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import LoadingSkeleton from '../skeletonLoading';

const formatDate = (dateStr) => {
    const parts = dateStr.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
        return (
            <div className="bg-white border border-gray-300 rounded-md shadow-md px-3 py-2 text-sm text-gray-800">
                <p><strong>{formatDate(label)}</strong></p>
                <p>{`Signups: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const UserGraph = () => {
    const dispatch = useDispatch();
    const { dailyState, isLoading } = useSelector((state) => state.analytical);

    useEffect(() => {
        dispatch(dailyAnalyticalDataFetch());
    }, [dispatch]);

    const formattedData = dailyState?.map(item => ({
        date: `${item._id.year}-${item._id.month}-${item._id.day}`,
        count: item.count,
    })) || [];

    return (
        <div className="w-full h-[26rem] bg-white rounded-3xl shadow-lg px-6 py-4 transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#0E4749] mb-6">📈 Daily User Signups</h2>

            {isLoading ? (
                <LoadingSkeleton />
            ) : (
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        data={formattedData}
                        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
                        <XAxis
                            dataKey="date"
                            tickFormatter={formatDate}
                            tick={{ fill: '#4b5563', fontSize: 12 }}
                        />
                        <YAxis
                            allowDecimals={false}
                            tick={{ fill: '#4b5563', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="count"
                            stroke="#0E4749"
                            strokeWidth={3}
                            dot={{ r: 4, stroke: '#0E4749', strokeWidth: 2, fill: '#fff' }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default UserGraph;
