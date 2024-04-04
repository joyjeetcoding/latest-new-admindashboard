import EditTopic from "@/components/EditTopic";

async function getVisitorById(id) {
  try {
    const res = await fetch(`https://admindocx.vercel.app/api/visitors/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch visitor");
    }

    const data = await res.json();
    return data
  } catch (error) {
    console.log("Error", error);
  }
};

async function page({ params }) {
  const { id } = params;

  const { singleVisitor } = await getVisitorById(id);
  const { name, email, location, status } = singleVisitor;
  return (
    <div>
      <EditTopic id={id} name={name} email={email} location={location} status={status} />
    </div>
  );
}

export default page;
