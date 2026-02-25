const Footer = () => {
  return (
    <footer className="bg-navy py-10">
      <div className="container mx-auto text-center">
        <p className="font-heading text-gold text-lg font-semibold mb-2">
          Advocate Bhavin Patel
        </p>
        <p className="text-primary-foreground/50 text-sm mb-4">
          101 Hilltown Square, Nikol, Ahmedabad, Gujarat
        </p>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Advocate Bhavin Patel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
