/**
 * Footer component serves as the site's footer.
 * It displays a message indicating that the site is a course project for educational purposes.
 *
 * @component
 * @returns {JSX.Element} The Footer component.
 */
export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center bg-primary text-white ">
      This site is a Noroff Frontend development course project by Prinyapon
      Prinyanut, purely for educational purposes, with no real product sales.
    </footer>
  );
};
