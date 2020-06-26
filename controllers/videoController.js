export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  //console.log(term);
  res.render("search", { pageTitle: "Search", searchingBy });
};
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("video detail");
export const editVideo = (req, res) => res.render("edit video");
export const deleteVideo = (req, res) => res.render("delete video");
