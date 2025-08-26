export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 mt-24">
            <div className="max-w-6xl mx-auto px-6 text-sm text-muted flex items-center justify-between">
                <p>© {new Date().getFullYear()} Viom Kapur</p>
                <div className="flex gap-4">
                    <a href="https://github.com/kyupralis24" className="hover:text-text">GitHub</a>
                    <a href="https://www.linkedin.com" className="hover:text-text">LinkedIn</a>
                    <a href="mailto:viom@example.com" className="hover:text-text">Email</a>
                </div>
            </div>
        </footer>
    )
}
