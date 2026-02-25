import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Breadcrumbs() {
  const location = useLocation();
  const { pathname, state } = location;
  const { t } = useTranslation();

  let segments = pathname.split("/").filter(Boolean);

  // Handle dynamic news page → show article title
  if (segments[0] === "news" && segments.length > 1) {
    segments = [state?.title || "Article"];
  }

  // No breadcrumbs on home page
  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");

    const label =
      index === segments.length - 1 && state?.title
        ? state.title
        : t(`nav.${segment}`, {
            defaultValue: segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
          });

    return { label, path, isLast: index === segments.length - 1 };
  });

  return (
    <div className="bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2.5 md:py-3">
        <nav className="flex items-center flex-wrap gap-1.5 text-[11px] md:text-sm">
          <Link to="/" className="font-medium text-[#0d2d47] hover:text-[#19a6b5]">
            {t("nav.home")}
          </Link>

          {crumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1.5">
              <span className="text-gray-400">/</span>
              {crumb.isLast ? (
                <span className="text-[#0d2d47] font-semibold">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="text-[#0d2d47] hover:text-[#19a6b5]"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}