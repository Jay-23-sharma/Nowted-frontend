type DetailContent = {
    paragraph:string;
}

export function Content({paragraph}:DetailContent){
    return(
        <div className="content pl-5 pr-5 text-white text-sm">
          <p>
            {paragraph}
          </p>
        </div>
    )
}