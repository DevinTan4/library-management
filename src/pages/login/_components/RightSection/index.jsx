import Form from "./_components/Form";
import Header from "./_components/Header";

const RightSection = () => {
  return (
    // Right side
    <div className="w-1/2 bg-[#003161] pt-[98px] px-[63px] pb-[66px] h-screen">
      {/* Header */}
      <Header />
      {/* Form */}
      <Form />
    </div>
  );
};

export default RightSection;
