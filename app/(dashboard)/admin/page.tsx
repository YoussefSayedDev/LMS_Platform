const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">Left</div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default AdminPage;
