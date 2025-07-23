import Tabs from "@/components/ui/tabs";
import WeatherApp from "./Weather";
import NewsList from "./News";
import MultipleWeather from "./MultipleWeather";

export default function TabsView() {
  const tabData = [
    {
      id: 1,
      name: "Weather App",
      content: <WeatherApp />,
    },
    {
      id: 2,
      name: "News App",
      content: <NewsList />,
    },
    {
      id: 3,
      name: "Multi Day Forecast Weather",
      content: <MultipleWeather />,
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <Tabs items={tabData} />;
    </div>
  );
}
