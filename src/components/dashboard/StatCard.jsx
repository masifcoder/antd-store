export default function StatCard({ title, value, change, positive }) {
  return (
    <div className=" p-5 rounded-xl shadow-sm bg-slate-200">
      <p className="text-sm mb-3 text-[16px]">{title}</p>
     <div className="bg-slate-50 p-3 rounded">
       <h3 className="text-2xl text-slate-600 font-bold mt-2">{value}</h3>

      <span
        className={`text-xs mt-2 inline-block px-2 py-1 rounded-full
        ${positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
      >
        {change}
      </span>
     </div>
    </div>
  );
}
