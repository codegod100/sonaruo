import Button from "@/components/actions/button/Button";
import { UseMutationResult } from "@tanstack/react-query";
import { useEffect } from "react";

interface Props {
  onClose: () => void;
  label: string;
  onRemoveLabel: () => void;
  numberOfImages?: number;
  onPublish: UseMutationResult<void, Error, void, unknown>;
}

export default function TopEditorBar(props: Props) {
  const { onClose, label, onRemoveLabel, numberOfImages, onPublish } = props;

  useEffect(() => {
    if (numberOfImages === 0 && label !== "") {
      onRemoveLabel();
    }
  }, [numberOfImages, label, onRemoveLabel]);

  return (
    <div className="flex flex-wrap justify-between items-center gap-2">
      <Button
        onClick={onClose}
        className="px-4 py-2 text-sm font-semibold border rounded-full hover:bg-neutral-50"
      >
        Cancel
      </Button>

      {label !== "" && (
        <Button
          onClick={onRemoveLabel}
          icon="octicon:shield-16"
          className="px-4 py-2 rounded-full text-sm text-neutral-600 font-semibold bg-neutral-100 hover:bg-neutral-600 hover:text-neutral-100"
        >
          {label === "nsfw"
            ? "Porn"
            : label.charAt(0).toUpperCase() + label.slice(1)}
        </Button>
      )}
      <Button
        onClick={() => {
          onPublish.mutate(undefined, {
            onSuccess: () => {
              onClose();
            },
          });
        }}
        className={`bg-primary text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-primary-dark ${
          onPublish.isPending && "animate-pulse"
        }`}
        disabled={onPublish.isPending}
      >
        {onPublish.isPending ? "Posting..." : "Post"}
      </Button>
    </div>
  );
}
