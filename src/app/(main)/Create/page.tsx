import Editor from "@/components/Editor";
import { ReactElement } from "react";

const CreateLayout = (
  { children }: Readonly<{ children: ReactElement }>
) => {
  return (

    <Editor>
      {children}
    </Editor>

  );
}

export default CreateLayout;