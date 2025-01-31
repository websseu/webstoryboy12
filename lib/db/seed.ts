import inputData from '@/lib/input';
import { connectToDatabase } from '.';
import { cwd } from 'process';
import { loadEnvConfig } from '@next/env';
import Post from './models/post.model';

loadEnvConfig(cwd());

const main = async () => {
  try {
    const { posts } = inputData;
    await connectToDatabase(process.env.MONGODB_URI);

    await Post.deleteMany();
    const createdPosts = await Post.insertMany(posts);

    console.log({
      createdPosts,
      message: 'Seeded database successfully',
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  }
};

main();
