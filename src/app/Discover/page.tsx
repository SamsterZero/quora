import SpaceCard from "@/components/SpaceCard";

const DiscoverPage = () => {
    return (
        <div className="w-full p-2">
            <h1 className="text-3xl font-bold">Discover</h1>
                <p className="text-gray-500">Discover new content and topics.</p>
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-2">
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
                <SpaceCard />
            </div>
        </div>
    );
}

export default DiscoverPage;