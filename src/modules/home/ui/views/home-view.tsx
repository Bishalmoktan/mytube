import CategoriesSection from "../sections/categories-section";

interface HomeViewProps {
  categoryId?: string;
}

const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[calc(100vw-16rem)] mx-auto mb-10 px-4 ppt-2.5 flex flex-col gap-y-6 ">
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};

export default HomeView;
