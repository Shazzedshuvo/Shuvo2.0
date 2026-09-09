import { NextResponse } from 'next/server';
import { projectsData } from '@/lib/data/projectsData';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const featuredOnly = searchParams.get('featured') === 'true';

    let filtered = [...projectsData];

    if (category && category !== 'All') {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (featuredOnly) {
      filtered = filtered.filter((p) => p.featured);
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      data: filtered
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve projects' },
      { status: 500 }
    );
  }
}
