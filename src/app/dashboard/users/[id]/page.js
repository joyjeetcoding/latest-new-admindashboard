import EditTopic from "@/components/EditTopic";

const getVisitorById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/visitors/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch visitor");
    }

    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

async function page({ params }) {
  const { id } = params;
  const { visitor } = await getVisitorById(id);
  const { name, email, location, status } = visitor;
  return (
    <div>
      <EditTopic id={id} name={name} email={email} location={location} status={status} />
    </div>
  );
}

export default page;
