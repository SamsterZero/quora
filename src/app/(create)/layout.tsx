import BackButton from "@/components/BackButton";
import Tab from "@/components/Tab";

const CreateLayout = (
  { children }: Readonly<{ children: React.ReactElement }>
) => {

  const buttons: Tab[] = [
    {
      text: "Ask Question",
      link: "/AskQuestion"
    },
    {
      text: "Add Post",
      link: "/AddPost"
    },
    {
      text: "Create Space",
      link: "/CreateSpace"
    },
  ];

  return (

    <div
      className="w-full flex flex-col gap-4 p-2"
    >
      <BackButton />
      <div
        className="flex"
      >
        <Tab
          tabs={buttons}
        />
      </div>
      {children}
    </div>

  );
}

export default CreateLayout;