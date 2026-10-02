export function DialogBox({ text }: { text: string }) {
  return (
    <div className="dialog" role="status">
      {text}
    </div>
  );
}
