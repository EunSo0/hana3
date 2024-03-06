export default function layout({
  children,
  viewer,
}: {
  children: React.ReactNode;
  viewer: React.ReactNode;
}) {
  return (
    <>
      {viewer}
      {children}
    </>
  );
}
