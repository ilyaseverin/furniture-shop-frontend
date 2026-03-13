import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/scss/main.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import ScrollTop from "@/components/common/ScrollTop";
import MobileMenu from "@/components/modals/MobileMenu";
import Context from "@/context/Context";
import BranchProvider from "@/context/BranchContext";
import Categories from "@/components/modals/Categories";
import Compare from "@/components/modals/Compare";
import QuickView from "@/components/modals/QuickView";
import Search from "@/components/modals/Search";
import ShoppingCart from "@/components/modals/ShoppingCart";
import SizeGuide from "@/components/modals/SizeGuide";
import QuestionMadal from "@/components/modals/QuestionMadal";
import SeliveryReturn from "@/components/modals/SeliveryReturn";
import Share from "@/components/modals/Share";
import Toolbar from "@/components/headers/Toolbar";
import SidebarAccount from "@/components/modals/SidebarAccount";
import Footer1 from "@/components/footers/Footer1";
import { getCachedBranches } from "@/lib/getSelectedBranchId";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const branches = await getCachedBranches();

  return (
    <html lang="ru">
      <body className="preload-wrapper">
        <div id="wrapper">
          <LayoutWrapper>
            <BranchProvider initialBranches={branches}>
            <Context>
              {children}
              <Footer1 />
              <Toolbar />
              <MobileMenu />
              <Categories />
              <Compare />
              <QuickView />
              <Search />
              <ShoppingCart />
              <SizeGuide />
              <ScrollTop />
              <QuestionMadal />
              <SeliveryReturn />
              <Share />
              <SidebarAccount />
            </Context>
            </BranchProvider>
          </LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
