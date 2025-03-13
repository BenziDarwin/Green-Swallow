import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
               <Image src="images/logo.png" alt="logo" width={100} height={50} /></h3>
            <p className="text-muted-foreground">
              Building wealth through strategic and sustainable investments.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="/investments" className="text-muted-foreground hover:text-primary">Investment Options</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="/disclaimer" className="text-muted-foreground hover:text-primary">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>support@greenswallow.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Investment Ave, Suite 100</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Green Swallow Investments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}