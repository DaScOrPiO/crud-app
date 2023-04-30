import Layout from "@/components/layout";
import NestedLayout from "@/components/nestedLayout";

export default function Calendar() {
  return <div>Calendar</div>;
}

Calendar.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
