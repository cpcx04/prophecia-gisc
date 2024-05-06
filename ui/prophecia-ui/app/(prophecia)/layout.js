import '../global.css';
import NavBar from '../ui/navbar'
export default function MainLayout({ children }) {
    return (
        <main>
            <div>
                <NavBar/>
            </div>
            <div>
                {children}
            </div>
        </main>
    );
  }