import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import Services from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  // let userData = useSelector((state) => state.userData);
  console.log(userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await Services.uploadFile(data.image[0])
        : null;

      if (file) {
        Services.deleteFile(post.featuredImage);
      }

      const dbPost = await Services.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.id : undefined,
      });
      console.log(dbPost);

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
        // navigate("/");
      }
    } else {
      let file = null;
      if (data.image[0]) {
        file = await Services.uploadFile(data.image[0]);
      }

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await Services.createPost({
          ...data,
          userId: userData.$id,
        });
        console.log(dbPost);

        if (dbPost) {
          navigate("/");
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
      return () => subscription.unsubscribe();
    });
  }, [watch, slugTransform, setValue]);

  const handleNaming = () => {
    console.log("Clicked Me");
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 sm:grid-cols-2 sm:gap-20 ">
        <div className="px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
        </div>
        <div className=" px-2">
          <Input
            label=""
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="w-full mb-4">
              <img
                src={Services.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            // onClick={handleNaming}
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>

      <RTE
        label="Content"
        name="content"
        control={control}
        defaultValue={getValues("content")}
        // readOnly = {false}
      />
    </>
  );
}

export default PostForm;
