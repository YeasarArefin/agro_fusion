interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div>
      <h1 className="text-xl text-gray-700">{title}</h1>
    </div>
  );
};

export default PageTitle;
