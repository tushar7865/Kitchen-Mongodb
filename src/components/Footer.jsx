export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Minu's Kitchen Mania | All Rights Reserved</p>
      <p>
        Follow us: <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </p>
    </footer>
  )
}
Footer();