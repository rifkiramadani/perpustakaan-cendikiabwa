import { cn } from "@/lib/utils";
import { TablerIcon } from "@tabler/icons-react";
import { Link } from "lucide-react";

export default function NavLink({ active = false, url = '#', title, icon: Icon, ...props }: {
    active: boolean,
    url: string,
    title: string,
    icon: TablerIcon
}) {
    return (
        <Link
            {...props}
            href={url}
            className={cn(
                active ? 'bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500 font-semibold text-white hover:text-white'
                    : 'text-muted-foreground hover:text-orange-500',
                'flex items-center gap-3 rounded-lg font-medium transition-all'
            )}
        >
            <Icon className='h-4 w-4' />
            {title}
        </Link>
    )
}
