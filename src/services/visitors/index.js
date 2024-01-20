export const registerNewVisitor = async (formData) => {
  try {
    const res = await fetch("/api/visitors/addvisitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};
