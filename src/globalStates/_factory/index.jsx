import { useState } from "react";

const Index = (init) => {
  const [state, setState] = useState(init);

  return { state, setState };
};

export default Index;
