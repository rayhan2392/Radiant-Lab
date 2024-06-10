import { PieChart, Pie, Cell, Legend } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Stat = () => {

    const axiosSecure = useAxiosSecure();
    const {data:bookings=[]}=useQuery({
        queryKey:['bookings'],
        queryFn:async()=>{
          const res= await  axiosSecure.get('bookings')
          return res.data;
        }
    })

   const pending = bookings.filter(data=>data.status==='pending')
   const delivered = bookings.filter(data=>data.status==='delivered')

   const chartData = [
    {name:'Pending',value:pending.length},
    {name:'Delivered',value:delivered.length}
   ]

  const COLORS = ["#0088FE",  "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl">Booking Delivery and pending ratio</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
       
      </div>
    </div>
  );
};

export default Stat;
