import Card from "./Card";

function DashboardLayout() {
  return (
    <div className="font-fontInput">
      <div className="relative">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 absolute  -translate-x-1/2 left-1/2 lg:left-0 lg:-translate-x-0 md:gap-6 lg:grid-cols-4 lg:gap-7 ">
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
