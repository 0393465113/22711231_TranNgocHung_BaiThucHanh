import { useEffect, useState } from "react";
import overviewIcon from "../assets/Squares four 1.png";
import cart from "../assets/Button 1509.png";
import money from "../assets/Button 1529.png";
import avatar from "../assets/Button 1530.png";

export default function Overview() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Overview")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="pl-4">Loading overview...</h2>;
  }

  const bgColors = ["bg-pink-100", "bg-blue-100", "bg-green-100"];
  const icons = [cart, money, avatar];

  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center gap-3 py-5">
        <img src={overviewIcon} alt="Overview" />
        <span className="text-lg font-semibold">Overview</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex justify-between rounded-xl p-5 ${bgColors[index % 3]}`}
          >
            <div className="flex flex-col justify-center">
              <div className="flex justify-between  w-150 items-center pb-2">
              <span className="text-2xl font-bold">{item.name}</span> <img src={icons[index % 3]} alt="icon" />
              </div>
              <span className="font-bold text-4xl my-2">${item.statistics}</span>
              <div className="flex items-center gap-2 text-sm">
                <p className="flex gap-1">
                  <span className="text-green-500 font-medium">{item.detail}</span>
                  period of change
                </p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
