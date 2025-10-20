import { Link } from "lucide-react";
import { IconInnerShadowBottomRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function AppLogoIcon({ url = '#', size = "size-9", isTitle = true }) {
    return (
        <Link
            href={url}
            className="flex items-center gap-2"
        >
            <IconInnerShadowBottomRight
                className={cn(
                    'text-orange-500',
                    size
                )}
            />
            {isTitle && (
                <div className="flex flex-col">
                    <span className="font-bold leading-none text-foreground">Cendikia</span>
                    <span className="text-xs font-medium text-muted-foreground">Pengetahuan Tanpa Batas</span>
                </div>
            )}
        </Link >
    );
}
