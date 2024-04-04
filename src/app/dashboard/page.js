import DashboardLayout from "@/components/dashboard/DashboardLayout";



async function extractAllProducts() {
  const res = await fetch(process.env.ALL_PRODUCTS, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

async function extractAllVisitors() {
  const res = await fetch(process.env.ALL_VISITORS, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

async function Dashboard() {

  const allProducts = await extractAllProducts();
  const allVisitors = await extractAllVisitors();

  return <DashboardLayout allProducts={allProducts && allProducts.data} allVisitors={allVisitors && allVisitors.data} />;
}

export default Dashboard;
