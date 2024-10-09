interface PageTitleProps {
  title: string;
}

const ModuleTitle = ({ title }: PageTitleProps) => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-primary">{title}</h1>
    </div>
  );
};

export default ModuleTitle;
