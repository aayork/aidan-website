import "srcl.scss";

import Button from "@/components/ui/srcl-button";
import Card from "@/components/ui/srcl-card";
// https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts
export default async function Page() {
  return (
    <div>
      Button components are essential interactive elements within SRCL,
      facilitating actions like navigation, form submission, and command
      execution.
      <br />
      <br />
      <Card title="EXAMPLE">
        <Button>Primary Button</Button>
        <br />
        <Button theme="SECONDARY">Secondary Button</Button>
        <br />
        <Button isDisabled>Disabled Button</Button>
      </Card>
    </div>
  );
}
