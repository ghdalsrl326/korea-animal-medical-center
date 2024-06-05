export const handleLogout = async () => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to logout");
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred during logout" };
    }
  }
};
