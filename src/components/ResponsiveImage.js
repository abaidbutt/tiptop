export function ResponsiveImage({ src, alt }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "100%",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
