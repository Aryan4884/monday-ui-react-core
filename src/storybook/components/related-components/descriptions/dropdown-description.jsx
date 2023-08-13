import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Dropdown from "../../../../components/Dropdown/Dropdown";

export const DropdownDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "60%"
    };
    return (
      <div style={style}>
        <Dropdown placeholder="Placeholder text here" size={Dropdown.size.MEDIUM} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/inputs-dropdown--overview"
      title="Dropdown"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
