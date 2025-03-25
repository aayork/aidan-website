import * as Constants from "@/lib/srcl-constants";
import * as Utilities from "@/lib/srcl-utilities";

interface GetDataParams {
  route: string;
  key: string | null;
  body: any;
}

interface UploadResponse {
  error?: string;
  uploadURL?: string;
}

export async function getData(
  { route, key, body }: GetDataParams,
  qualifier: string = "data",
) {
  let result: any;
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Only add X-API-KEY header if key is provided
    if (key) {
      headers["X-API-KEY"] = key;
    }

    const response = await fetch(route, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (result.error) {
    return null;
  }

  if (!result[qualifier]) {
    return null;
  }

  return result;
}

export async function onUserListData({ key }: { key: string }) {
  const route = `${Constants.API}/data`;
  const body = {};
  return await getData({ route, key, body });
}

export async function onUserDeleteData({
  id,
  key,
}: {
  id: string;
  key: string;
}) {
  const route = `${Constants.API}/data/delete`;
  const body = { id };
  return await getData({ route, key, body });
}

export async function onRefreshDocuments({
  key,
  type,
  domain,
}: {
  key: string;
  type: string;
  domain: string;
}) {
  const route = `${Constants.API}/documents`;
  const body = { type, domain };
  return await getData({ route, key, body });
}

export async function onGetDocumentById({ id }: { id: string }) {
  const route = `${Constants.API}/documents/${id}`;
  const body = {};
  return await getData({ route, key: null, body });
}

export async function onUserCreateDocument({
  key,
  type,
  domain,
}: {
  key: string;
  type: string;
  domain: string;
}) {
  const route = `${Constants.API}/documents/create`;
  const body = { type, domain };
  return await getData({ route, key, body });
}

export async function onDeleteDocumentById({
  id,
  key,
}: {
  id: string;
  key: string;
}) {
  const route = `${Constants.API}/documents/delete`;
  const body = { id };
  return await getData({ route, key, body });
}

export async function onUpdateDocumentById({
  id,
  key,
  data,
}: {
  id: string;
  key: string;
  data: any;
}) {
  const route = `${Constants.API}/documents/update`;
  const body = { id, data };
  return await getData({ route, key, body });
}

export async function onPublicUserAuthenticate({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const route = `${Constants.API}/users/authenticate`;
  const body = { email, password };
  return getData({ route, key: null, body }, "user");
}

export async function onPublicUserForgotPassword({ email }: { email: string }) {
  const route = `${Constants.API}/users/reset-password`;
  const body = { email, source: "wireframes.internet.dev" };
  return getData({ route, key: null, body }, "success");
}

export async function onUserChangePassword({
  key,
  password,
}: {
  key: string;
  password: string;
}) {
  const route = `${Constants.API}/users/update-viewer-password`;
  const body = { password };
  return getData({ route, key, body });
}

export async function onUserRegenerateAPIKey({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const route = `${Constants.API}/users/regenerate-key`;
  const body = { email, password };
  return getData({ route, key: null, body }, "user");
}

export async function onUserUnsubscribeServices({ key }: { key: string }) {
  const route = `${Constants.API}/users/subscriptions/unsubscribe`;
  const body = null;
  return getData({ route, key, body }, "user");
}

export async function onRefreshPosts({
  key,
  type,
  user_id,
}: {
  key: string;
  type: string;
  user_id: string;
}) {
  const route = `${Constants.API}/posts`;
  const body = { type, user_id };
  return await getData({ route, key, body });
}

export async function onUserCreatePost({
  id,
  key,
  src,
  type,
}: {
  id: string;
  key: string;
  src: string;
  type: string;
}) {
  const route = `${Constants.API}/posts/create`;
  const body = { type, fields: { fileId: id, public: true }, src };
  return getData({ route, key, body });
}

export async function onUserCreateThread({
  fields,
  key,
  src,
  type,
}: {
  fields: any;
  key: string;
  src: string;
  type: string;
}) {
  const route = `${Constants.API}/posts/create`;
  const body = { fields, src, type };
  return getData({ route, key, body });
}

export async function onUserDeletePost({
  id,
  key,
}: {
  id: string;
  key: string;
}) {
  const route = `${Constants.API}/posts/delete`;
  const body = { id };
  return getData({ route, key, body });
}

export async function onUserListThreadReplies({
  id,
  key,
  orderBy,
}: {
  id: string;
  key: string;
  orderBy: string;
}) {
  const route = `${Constants.API}/posts/all-thread-replies`;
  const body = { id, orderBy };
  return getData({ route, key, body });
}

export async function onUserListThreads({
  key,
  orderBy,
}: {
  key: string;
  orderBy: string;
}) {
  const route = `${Constants.API}/posts/all-threads`;
  const body = { orderBy };
  return getData({ route, key, body });
}

export async function onUserUploadDataGCS({
  domain,
  file,
  key,
}: {
  domain: string;
  file: File;
  key: string;
}): Promise<UploadResponse | null> {
  let signedResult: UploadResponse;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: "File size exceeds 15mb limit" };
  }

  try {
    const route = `${Constants.API}/data/generate-presigned-url-gcs`;
    const body = { domain, type, file: name, size };
    signedResult = await getData({ route, key, body }, "uploadURL");
  } catch (e) {
    return null;
  }

  try {
    fetch(signedResult.uploadURL!, {
      method: "PUT",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}

export async function onUserUploadDataS3({
  domain,
  file,
  key,
}: {
  domain: string;
  file: File;
  key: string;
}): Promise<UploadResponse | null> {
  let signedResult: UploadResponse;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: "File size exceeds 15mb limit" };
  }

  try {
    const route = `${Constants.API}/data/generate-presigned-url`;
    const body = { domain, type, file: name, size };
    signedResult = await getData({ route, key, body }, "uploadURL");
  } catch (e) {
    return null;
  }

  try {
    fetch(signedResult.uploadURL!, {
      method: "PUT",
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}
