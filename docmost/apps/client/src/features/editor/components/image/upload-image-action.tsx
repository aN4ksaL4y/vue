import { handleImageUpload } from "@Pyjri/editor-ext";
import { uploadFile } from "@/features/page/services/page-service.ts";
import { notifications } from "@mantine/notifications";

export const uploadImageAction = handleImageUpload({
  onUpload: async (file: File, pageId: string): Promise<any> => {
    try {
      return await uploadFile(file, pageId);
    } catch (err) {
      notifications.show({
        color: "red",
        message: err?.response.data.message,
      });
      throw err;
    }
  },
  validateFn: (file) => {
    if (!file.type.includes("image/")) {
      return false;
    }
    if (file.size / 1024 / 1024 > 50) {
      notifications.show({
        color: "red",
        message: `File exceeds the 50 MB attachment limit`,
      });
      return false;
    }
    return true;
  },
});
