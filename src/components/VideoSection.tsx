
const VideoSection = () => {
  return (
    <div className="lg:w-1/2 max-w-2xl">
      <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden shadow-2xl">
        <video 
          className="w-full aspect-video object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/buttons/bg-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-semibold">Watch Our Trading Bot In Action</p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
