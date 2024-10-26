import { HeaderInternal } from "@/components/HeaderInternal/header-internal";
import * as m from "@/paraglide/messages";
import { HomeIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-full max-w-[1280px]">
      <HeaderInternal
        icon={<HomeIcon />}
        subtitle={m.dashboardSubtitle()}
        title={m.dashboardTitle()}
      />
    </div>
  );
}
