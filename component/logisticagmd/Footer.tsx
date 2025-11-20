export default function Footer() {
  return (
    <footer className="bg-dark-blue text-light-gray py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="my-4">
          &copy; {new Date().getFullYear()} GMD LOGÍSTICA. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
