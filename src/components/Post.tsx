const Post = () => {
    return (
        <div className="container shadow-lg dark:shadow-none py-3 rounded dark:bg-neutral-900 dark:border dark:border-neutral-800">
                <div className="flex justify-between items-center gap-2 px-4">
                    <div className="flex items-center gap-2">
                        <button type="button" className="material-symbols-outlined text-danger text-3xl">
                            account_circle
                        </button>
                        <div>
                            <h4 className="font-bold">John Doe</h4>
                            <p className="text-sm">Software Engineer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="button"
                            className="bg-red-600 rounded-full px-5 py-1 text-sm text-white">Follow</button>
                        <button className="material-symbols-outlined text-red-600">close</button>
                    </div>
                </div>
                <div className="py-2 px-4">
                    <h4 className="font-bold">Title</h4>
                    <p className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores
                        laboriosam harum non repellat corporis quisquam ducimus odit temporibus perferendis labore
                        tenetur ea, nam id debitis sint possimus ullam consectetur. Similique non enim dolorem
                        voluptates sed aliquid maxime numquam fugit facilis voluptas unde nisi modi, reiciendis, eum
                        error sit ut fugiat asperiores laboriosam corporis deserunt amet quas cum harum. Pariatur vel,
                        maiores obcaecati velit quibusdam laudantium tempore dolorem ratione nostrum quos aliquam
                        placeat aperiam sed odit tenetur delectus qui libero saepe ex. Obcaecati odio dolor sapiente
                        saepe perspiciatis nobis, voluptates praesentium officiis quia nulla debitis vero provident
                        soluta vitae cupiditate esse fugit cumque inventore doloremque quod, voluptate iure enim ipsam
                        expedita? Iure temporibus et molestiae amet tempore eaque at facere iste! Placeat totam
                        necessitatibus fugiat iusto, nulla ipsam esse facilis laboriosam at dolor tempora maxime
                        molestiae maiores aliquam vel perferendis natus voluptatem expedita dolorem possimus quae!
                        Officia delectus numquam voluptatum similique, libero recusandae asperiores iure est facere
                        quibusdam? Perferendis cupiditate maiores minus est reprehenderit, libero debitis. Amet
                        aspernatur, quasi tempore laboriosam assumenda illo est repudiandae quia, eos quod recusandae
                        fuga earum temporibus? Explicabo voluptate, blanditiis eveniet voluptatibus consequuntur dolor
                        autem voluptas est?
                        </p>
                </div>
                <div className="flex items-center justify-between gap-2 px-4">
                    <div className="flex items-center gap-2">
                        <button type="button" className="flex items-center gap-2 rounded-full bg-red-100 px-1">
                            <i className="material-symbols-outlined text-red-600">stat_1</i>
                        </button>
                        <span>10</span>
                        <button type="button" className="flex items-center gap-2 rounded-full bg-red-100 px-1">
                            <i className="material-symbols-outlined text-red-600">stat_minus_1</i>
                        </button>
                        <button type="button" className="flex items-center gap-1 px-2">
                            <i className="material-symbols-outlined">comment</i>
                            <span>2</span>
                        </button>
                        <button type="button" className="flex items-center gap-1 px-2">
                            <i className="material-symbols-outlined">sync</i>
                            <span>4</span>
                        </button>
                    </div>
                    <button type="button" className="flex items-center gap-1 px-2">
                        <i className="material-symbols-outlined">more_horiz</i>
                    </button>
                </div>
            </div>
    );
};

export default Post;